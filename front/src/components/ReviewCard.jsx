import React from "react"


const ReviewCard = ({review}) => {


return (
<div>
{review && review.map((r) => <ul><li key={r.id}>{r.content}</li></ul>)}

</div>
);
};

export default ReviewCard

{/* {!review ? <p>No hay reviews</p> : null} */}