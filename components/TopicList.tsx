import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicList() {
  return <>
    <div>
      <div>
        <h2>Topic List</h2>
        <div>Topic Description</div>

        <div>
          <RemoveBtn></RemoveBtn>
          <Link href={"/editTopic/123"}>
          <HiPencilAlt size={24}></HiPencilAlt>
          </Link>
        </div>
      </div>
    </div>
  </>;
}