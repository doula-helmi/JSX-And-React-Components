const UserPhoto = "./userlogo.png";
const Photo = () => {
  return (
    <>
      <div className="image-crop">
        <img className="avatar" src={UserPhoto} alt="User" />
      </div>
    </>
  );
};

export default Photo;
