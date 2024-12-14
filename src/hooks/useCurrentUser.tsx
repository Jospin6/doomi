import { RootState } from "@/features/store";
import { useSelector } from "react-redux";
import { User } from '@/helpers/types'

const useCurrentUser = (): User | null => {
    return useSelector((state: RootState) => state.user.user);
};

export default useCurrentUser;