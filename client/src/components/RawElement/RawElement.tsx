import React, {
  ElementType,
  HTMLAttributes,
  FC,
  useState,
  useEffect,
  useRef,
} from "react";

import { useDispatch } from "react-redux";
import { webdataActions } from "../../store/Reducers/WebDataReducer/webDataReducer";

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  customCss: string;
  elemVal: string;
  element: string | [string, number | string, string?];
}
const RawElement: FC<ComponentProps> = ({
  as: Tag = "div",
  customCss,
  elemVal,
  element,
}) => {
  const [isSeleceted, setIsSelected] = useState<boolean>();
  const dispatch = useDispatch();
  const treeRef = useRef<HTMLTextAreaElement>(null);

  const handleClickElement = () => {
    setIsSelected(true);
  };

  const handeUnselect = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList[0] === "RawElem") return;
    if (!treeRef.current) return;

    setIsSelected(false);
    dispatch(
      webdataActions.setSingleDetails({
        content: treeRef.current.value,
        element: element,
      })
    );
  };

  useEffect(() => {
    document.body.addEventListener("click", handeUnselect);
    return () => {
      document.body.removeEventListener("click", handeUnselect);
    };
  }, []);

  return (
    <>
      {isSeleceted ? (
        <form
          className="w-full flex items-center justify-center h-full"
          id="form-one"
        >
          <textarea
            className={`RawElem bg-[transparent] h-full w-full border-2 border-[#333] border-dashed ${customCss} focus:border-dashed"
              }`}
            ref={treeRef}
            id="form-one"
            defaultValue={elemVal}
          ></textarea>
        </form>
      ) : (
        <Tag onClick={handleClickElement} className={`RawElem ${customCss}`}>
          {elemVal}
        </Tag>
      )}
    </>
  );
};

export default RawElement;
