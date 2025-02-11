import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

export const UserAvatar = () => {
  const user = useUser();
  return (
    <Avatar className="size-8">
      <AvatarImage src={user?.user?.imageUrl} />
      <AvatarFallback>
        {user?.user?.firstName?.charAt(0)}
        {user?.user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};
