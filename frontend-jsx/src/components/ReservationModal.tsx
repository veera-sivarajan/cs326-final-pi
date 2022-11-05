import { Modal } from "bootstrap";
import Enact from "../Enact";

interface DropDownButtonProps {
  callback?: () => void;

  start_date: string;
  end_date: string;
  building: string;
  room: string;
  date: string;
}

function triggerModal(id: string) {
  const element = document.getElementById(id) as HTMLElement;
  const myModal = new Modal(element);
  myModal.show();
}

function closeModal(id: string) {
  const element = document.getElementById(id) as HTMLElement;
  const myModal = new Modal(element);
  console.log("destroy");
  myModal.dispose();
}

export default function ReservationModal(props: DropDownButtonProps) {
  let uniqueid =
    props.room + props.building + props.start_date + props.end_date;
  setTimeout(() => triggerModal(uniqueid), 100);
  //setTimeout( () => closeModal(uniqueid), 2000);
  let closeButtonId = uniqueid + "closeButton";
  setTimeout(
    () =>
      document
        .getElementById(closeButtonId)
        ?.addEventListener("click", () => closeModal(uniqueid)),
    200
  );

  return (
    <div
      class="modal fade"
      id={props.room + props.building + props.start_date + props.end_date}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="container-fluid justify-content-center">
              <h3 class="modal-title " id="exampleModalLabel">
                Request Room
              </h3>
              <label id="exampleModalLabel">
                {props.room}, {props.start_date} - {props.end_date} on{" "}
                {props.date}
              </label>
            </div>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">
                  Event Title:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                ></input>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">
                  Description:
                </label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Confirm
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              id={uniqueid + "closeButton"}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
