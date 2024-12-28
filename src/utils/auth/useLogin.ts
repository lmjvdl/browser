import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import fetchWithError from "../../utils/dataFetching/fetchWithError";
import { deleteUser, updateUser } from "../../context/authStore";
import { errorHandler } from "../../utils/dataFetching/queryClient";
import authUrls from "../API/URLs";
import AuthResponseSanitizer from "../../utils/auth/AuthResponseSanitizer";

export default function useLogin() {
//   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationKey: ["AUTH", "LOGIN", "USER"],
    retry: false,
    cacheTime: 0,
    mutationFn: (entry: { username: string; password: string }) =>
      fetchWithError(authUrls.login, {
        method: "POST",
        body: JSON.stringify(entry),
      }).then(AuthResponseSanitizer),
    onSuccess: (serverResponse) => {
      updateUser(serverResponse);
    //   queryClient.setQueryData(allQueryKeys.refreshToken, {
    //     access: serverResponse.accessToken,
    //   });
      navigate("/search");
    },
    onError: () => {
      const prettyError = new Error("نام کاربری یا رمز عبور شما نامعتبر است.");
      prettyError.cause = "خطای احراز هویت";
      errorHandler(prettyError);
      deleteUser();
    },
  });

  return loginMutation;
}
