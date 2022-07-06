import Image from "next/image";

export default function MyAvatar(props: any) {
  console.log("Avatar Props:", props);
  return (
    <Image
      src="/../public/avatar.webp"
      height={40}
      width={40}
      alt="Mart Chatbot"
      className="bot-avatar"
    />
  );
}
