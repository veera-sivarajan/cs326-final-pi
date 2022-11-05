import Enact from "../Enact";
import DropdownButtonRow from "./DropdownButtonRow";
import RoomList from "./RoomList";

export default function MainContainer() {
  return (
    <div>
      <DropdownButtonRow />
      <RoomList />
    </div>
  );
}
