import React from "react";

const Card = (props) => {
  // const option = urlFor(props.images).url();
  // // console.log(urlFor(props.images).url());
  // // const imgurl = option.baseUrl + option.source;
  // console.log("hello");
  // console.log(urlFor(props.images));

  return (
    <>
      <div className="flex flex-col cursor-pointer">
        <div className="h-44 w-36 ">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={props.image}
            alt={props.title}
          />
        </div>
        <h1 className="text-xs md:text-sm text-slate-200 py-1 mt-auto">
          {props.title}
        </h1>
      </div>
    </>
  );
};

export default Card;
