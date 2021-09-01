import { useQuery } from "react-query";
import { useAuthAxios } from "../contexts/AuthAxiosContext";
import { Post } from "types/Post";

export const useGetPosts = () => {
  const { get } = useAuthAxios();
  const getPosts = () => get<Post[]>("posts").then((response) => response.data);

  return useQuery("posts", getPosts);
};
