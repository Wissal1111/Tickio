import './DashCard.css'
export default function DashCard({type,number}){
    return(
        <div className="dashcard">
           <div className="top">
             <p>{number}</p>
            <div className="circle"/>
           </div>
            <div className="bottom">
                {type}
            </div>
          
        </div>
    );
}