/**
 * wydzielona warstwa do zapytań http
 *
 * poprzednim podejściem było bezpośrednie użycie funckji do zapytań
 * w komponencie w metodzie cyklu życia/effecie lub w handlerze do kontrolki
 *
 * ====== poniżej zgrubny przykład ======
 *
 * const { get, post } = useAuthAxios();
 *
 * useEffect(()=>{
 *   get<User[]>("users").then((response) => response.data);
 * },[])
 *
 * const handleButtonClick = () => {
 *    post(url).then(()=>...);
 * }
 *
 */
import { useQuery, useMutation } from "react-query";
import { useAuthAxios } from "../contexts/AuthAxiosContext";
import { User } from "../types/User";

export const useGetUsers = () => {
  const { get } = useAuthAxios();
  const getUsers = () => get<User[]>("users").then((response) => response.data);

  return useQuery("users", getUsers);
};

type UserCreate = Partial<User>;

export const useCreateUser = () => {
  const { post } = useAuthAxios();
  const createUser = (user: UserCreate) =>
    post<User>("users", user).then((response) => response.data);

  const mutation = useMutation(createUser, {
    onSuccess: () => {},
    onError: () => {},
  });

  return {
    createUser: mutation.mutate,
  };
};

type UserToEdit = Partial<User>;

export const useEditUser = () => {
  const { patch } = useAuthAxios();

  const mutation = useMutation(
    (userToEdit: UserToEdit) => patch(`users/${userToEdit.id}`, userToEdit),
    {
      onSuccess: (resp) => {
        console.log(resp);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return { editUser: (userToEdit: UserToEdit) => mutation.mutate(userToEdit) };
};

export const useRemoveUser = () => {
  const { delete: remove } = useAuthAxios();

  const mutation = useMutation(
    (userToRemove: UserToEdit) =>
      remove(`users/${userToRemove.id}`, { data: userToRemove }),
    {
      onSuccess: (resp) => {
        console.log(resp);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return {
    removeUser: (userToRemove: UserToEdit) => mutation.mutate(userToRemove),
  };
};
