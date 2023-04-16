import { getImageUrl } from "./utils.js";

function Avatar({ imageId, size, name }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;
