import Card from "./Card";
import Title from "./Title";
import Avatar from "./Avatar.js";
import Ul from "./Ul";

function Profile({ imageId, name, size, profession, awards, discovery }) {
  return (
    <Card>
      <section>
        <Title name={name} />
        <Avatar name={name} imageId={imageId} size={size} />
        <Ul profession={profession} awards={awards} discovery={discovery} />
      </section>
    </Card>
  );
}

export default Profile;
