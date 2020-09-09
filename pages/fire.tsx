import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { Suspense } from "react";

export interface FireProps {}

function Students() {
  // lazy load the Firestore SDK and create a document reference
  const collectionRef = useFirestore().collection("students");
  const data: any = useFirestoreCollectionData(collectionRef);
  return (
    <table style={{ border: "1px solid black" }}>
      <tr style={{ border: "1px solid black" }}>
        <th style={{ border: "1px solid black", paddingRight: 50 }}>Name</th>
        <th style={{ border: "1px solid black" }}>USN</th>
      </tr>
      {data.map((student: any) => {
        return (
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{student.name}</td>
            <td style={{ border: "1px solid black" }}>{student.usn}</td>
          </tr>
        );
      })}
    </table>
  );
}

const Fire: React.SFC<FireProps> = () => {
  return (
    <>
      <h1>The Students are:</h1>
      <Suspense fallback={"loading Students..."}>
        <Students />
      </Suspense>
    </>
  );
};

export default Fire;
