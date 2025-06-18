import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import YouTube from "react-youtube";
import Image from "next/image";
import clsx from "clsx";

export default function TinaBox({ data, updateItemClasses = {} }) {
  const tinaComponents = {
    itemClasses: {
      h1: "text-4xl py-6",
      h2: "text-3xl py-6",
      h3: "text-2xl py-6",
      h4: "text-xl py-6",
      h5: "text-lg py-6",
      h6: "text-base py-6",
      p: "text-sm py-6",
      strong: "",
      a: "text-blue-500 font-semibold hover:text-black cursor-pointer",
      blockquote: "text-right p-1 text-sm",
      li: "list-disc ml-6 p-1",
      td: "border-2 border-gray-300 p-2 text-xs hover:bg-gray-300 md:text-sm lg:text-base",
    },

    TinaComponent: (props) => {
      return (
        <div className={props.position}>
          <TinaMarkdown content={props?.children}></TinaMarkdown>
        </div>
      );
    },
    VideoComponent: (props) => {
      return (
        <>
          <YouTube videoId={props?.id}></YouTube>
        </>
      );
    },
    ImageBoxComponent: (props) => {
      const mainDiv = {
        top: "column",
        bottom: "column-reverse",
        left: "row",
        right: "row-reverse",
      };

      const textAlignmnet = {
        center: "text-center ",
        left: "text-left ",
        right: "text-right ",
      };

      return (
        <div
          style={{ flexDirection: mainDiv[props?.imagePosition] }}
          className={clsx(
            "my-4 flex w-full flex-wrap items-center justify-center gap-4 overflow-hidden sm:flex-nowrap",
          )}
        >
          <div className="">
            <img
              className="object-cover"
              style={{
                width: props?.imageWidth + "px" || "100%",
                height: props?.imageHeight + "px" || "100%",
              }}
              src={props?.image || "/misc/default.png"}
            ></img>
          </div>
          <div
            className={clsx("basis-auto", textAlignmnet[props?.textAlignment])}
          >
            <TinaMarkdown content={props?.textField?.children}></TinaMarkdown>
          </div>
        </div>
      );
    },
    AuthorComponent: (props) => {
      return (
        <>
          <div>
            <TinaMarkdown content={props.children}></TinaMarkdown>
            <div className="flex flex-row items-center gap-4">
              <div className="relative h-[50px] w-[50px] overflow-hidden">
                <Image
                  src={props.image || "/misc/default.png"}
                  alt={props.name}
                  fill
                  object-fit="contain"
                  className="image-fill rounded-full"
                />
              </div>
              <h6 className="font-bold">{props.name}</h6>
            </div>
          </div>
        </>
      );
    },
    th: (props) => (
      <th className="border-2 border-gray-300 p-2 font-bold" {...props} />
    ),
    td: (props) => <td className={tinaComponents.itemClasses.td} {...props} />,
    h1: (props) => <h1 className={tinaComponents.itemClasses.h1} {...props} />,
    h2: (props) => <h2 className={tinaComponents.itemClasses.h2} {...props} />,
    h3: (props) => <h3 className={tinaComponents.itemClasses.h3} {...props} />,
    h4: (props) => <h4 className={tinaComponents.itemClasses.h4} {...props} />,
    h5: (props) => <h5 className={tinaComponents.itemClasses.h5} {...props} />,
    h6: (props) => <h6 className={tinaComponents.itemClasses.h6} {...props} />,
    p: (props) => <p className={tinaComponents.itemClasses.p} {...props} />,
    a: (props) => {
      return (
        <a className={tinaComponents.itemClasses.a} href={props?.url}>
          {props?.children?.props?.content[0]?.text}
        </a>
      );
    },
    li: (props) => <li className={tinaComponents.itemClasses.li} {...props} />,
    blockquote: (props) => (
      <blockquote
        className={tinaComponents.itemClasses.blockquote}
        {...props}
      />
    ),
    strong: (props) => (
      <strong className={tinaComponents.itemClasses.strong} {...props} />
    ),
  };

  tinaComponents.itemClasses = {
    ...tinaComponents?.itemClasses,
    ...updateItemClasses,
  };

  return (
    <div data-tina-field={data && tinaField(data, "body")}>
      <TinaMarkdown
        content={data?.body}
        components={tinaComponents}
      ></TinaMarkdown>
    </div>
  );
}
