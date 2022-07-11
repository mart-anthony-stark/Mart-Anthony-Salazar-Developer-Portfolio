import Image from "next/image";
import avatar from "../../public/avatar.webp";
export default function MyAvatar(props: any) {
  return (
    <Image
      src={avatar}
      height={40}
      width={40}
      alt="Mart Chatbot"
      className="bot-avatar"
    />
  );
}
