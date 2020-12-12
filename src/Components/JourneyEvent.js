export default function JourneyEvent(props = {title: "", description: ""}){

    return (
        <article class="journey-event col p-3 text-center">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </article>
    );

}