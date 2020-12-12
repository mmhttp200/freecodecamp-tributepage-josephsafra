export default function ProfilePicture(){

    const imgSrc = "/joseph-safra.jpg";

    return(
        <picture className="col">
            <img src={imgSrc} alt="A picture with Joseph Safra." className="img-fluid " />
        </picture>
    );

}