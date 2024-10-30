/* eslint-disable react/prop-types */
const Profile = () => {
  return (
    <div>
      <ProfileCard
        name={"Antanu"}
        age={19}
        greetings={<div>Hello there! </div>}
      >
        <button>Contact Me</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;

const ProfileCard = ({ name, age, greetings, children }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{greetings}</p>
      <p>{children}</p>
    </div>
  );
};
