import { QueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

export function errorHandler(error: unknown): void {
  if (error instanceof Error) {
    notifications.show({
      title: String(error.cause),
      message: error.message,
      autoClose: 5_000,
      color: "red",
    });
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: errorHandler,
    },
    mutations: {
      onError: errorHandler,
    },
  },
});
