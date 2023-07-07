

    const Profile = ({fullName,bio,profession,children}) => {
    const handleName = () => alert (`Hello ${fullName}`)
    return (
        <div style={{marginLeft:"23px"}}>
            <div> {children}</div>
            <h1 style={{color:"white"}}> FULLNAME: </h1>
            <p style={{fontSize:"200%", color:"white" }}> {fullName}</p>

            <h1 style={{color: "white"}}> BIO: </h1>
            <p style={{color: "white"}}> {bio}</p>

            <h1> PROFESSION </h1>
            <p style={{color:"white", fontSize:"200%", fontWeight:"bolder"}}> {profession}</p>
            {handleName()}
        </div>
    )
};

Profile.defaultProps = {
    fullName: "please Enter Your Name",
    bio: "fill your bio",
    Profession: "please Input your Profession"
}

export default Profile;
