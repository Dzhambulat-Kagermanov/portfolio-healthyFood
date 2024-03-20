import { useSelector, useDispatch } from "react-redux";
import BaseStructure from "../UI/BASE-STRUCTURE/BaseStructure";
import Half1 from "./HALF1/Half1";
import "./Modal.css";
import Btn from "./BTN/Btn";
import "./Adaptive.css";

export default function Modal(props) {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => {
    return state.modal.modalToggleReducer.currentState;
  });

  return (
    <section>
      <BaseStructure
        noInner
        wrapperStyles={
          modalState === "--active" ? { zIndex: 4 } : { zIndex: -1 }
        }
        wrapperContent={
          <div
            className={`modal-block ${modalState ? modalState : ""}`}
            onClick={(event) => {
              if (!event.target.closest("form")) {
                dispatch({ type: "CLOSE_MODAL", payload: "" });
              }
            }}
          >
            <form action="" method="post">
              <Half1 />
              <Btn />
            </form>
          </div>
        }
      ></BaseStructure>
    </section>
  );
}
