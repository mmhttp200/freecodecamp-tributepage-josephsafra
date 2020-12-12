import { useEffect, useState } from 'react';
import { useSelector  } from 'react-redux'
import JourneyEvent from './JourneyEvent';

export default function Journey(props){

    const [data, setData] = useState(useSelector(state => state.journey.events));

    return (
        <div className="journey">
            <h1 className="p-5 text-center text-uppercase">A brief<wbr /> introduction<br /><wbr /> on the history of<wbr /> a giant</h1>
            {data.map((event)=>{
                return (
                    <JourneyEvent title={event.title} description={event.description} />
                );
            })}
        </div>
    );

}