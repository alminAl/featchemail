import axiousRequest from "@/ilb/axiousRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useGetGmailEmail = () => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["gmail"], () =>
    axiousRequest({
      url: `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};

export const useGetGmailEmailDetails = (id) => {
    /** session management */
    const { data: session } = useSession();
    return useQuery(["gmail_details", id], () =>
      axiousRequest({
        url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    );
  };

// export const usePostNewsData = () => {
//   const queryClient = useQueryClient();
//   /** session management */
//   const { data: session } = useSession();
//   return useMutation(
//     async (body) =>
//       await axiousResuest({
//         url: `/news/management/`,

//         method: "post",
//         data: body,
//         headers: {
//           Authorization: `Bearer ${session.accessToken}`,
//         },
//       }),
//     {
//       onSuccess: () => queryClient.invalidateQueries(["news"]),
//     }
//   );
// };
