// eslint-disable-next-line react/prop-types
export const Card = ({ id, title, rank, image , link }) => {
  return (
    <>
      <div id={id} className="card w-96 bg-base-100 shadow-xl" style={{maxHeight:"450px"}}>
        <figure>
          <img
            src={image}
            alt={title}
            // style={}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{rank}</p>
          <div className="card-actions justify-end">
            <a className="btn btn-primary" href={link}> Watch Now</a>
          </div>
        </div>
      </div>
    </>
  );
};
