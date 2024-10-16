import s from "./Avatar.module.scss";

interface AvatarProps {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
}

export default function Avatar({person, size}: AvatarProps) {
  return (
    <img
      className={s.avatar}
      src={`https://i.imgur.com/${person.imageId}s.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}