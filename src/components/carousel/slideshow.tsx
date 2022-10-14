import { Key } from "react";

const Slider = ({ carMedia }: any) => {
  return (
    <section className="sh">
      <div className="sh-show">
        <div className="sh-wrapper">
          {carMedia && carMedia.carMediaList.length > 0 ? (
            carMedia.carMediaList.map(
              (
                val: {
                  type: any;
                  url: string;
                  name: string;
                },
                index: Key
              ) => {
                if (
                  val.type === "image" ||
                  val.type === "image/jpeg" ||
                  val.type === "image/webp"
                ) {
                  return <img src={val.url} alt={val.name} key={index} />;
                } else {
                  return (
                    <video controls key={index}>
                      <source src={val.url} type="video/mp4" />
                    </video>
                  );
                }
              }
            )
          ) : (
            <span>No Media</span>
          )}
        </div>
      </div>
      <div className="sh-multiple">
        {carMedia && carMedia.carMediaList.length > 0 ? (
          carMedia.carMediaList.map(
            (
              val: {
                type: any;
                url: string;
                name: string;
              },
              index: Key
            ) => {
              if (
                val.type === "image" ||
                val.type === "image/jpeg" ||
                val.type === "image/webp"
              ) {
                return (
                  <div key={index}>
                    <img src={val.url} alt={val.name} />
                  </div>
                );
              } else {
                return (
                  <div>
                    <video controls>
                      <source src={val.url} type="video/mp4" />
                    </video>
                  </div>
                );
              }
            }
          )
        ) : (
          <div>No media file available</div>
        )}
      </div>
    </section>
  );
};

export default Slider;
