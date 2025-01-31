
// import config from "@/config/config.json";
// import { getListPage } from "@/lib/contentParser";
// import PageHeader from "@/partials/PageHeader";
// import UploadProblemForm from "@/components/UploadProblemForm";
// import { RegularPage } from "@/types";

import SeoMeta from "@/partials/SeoMeta";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { UploadProblem } from "./UploadProblem";
import { promises as fs } from "fs";
import path from "path";

const AddProblem = async () => {
  const session = await getServerSession(authOptions)
  if (session?.user.role !== 'ADMIN') {
    throw new Error('Unauthorized')
  }

  const data = await fs.readFile(
    path.join(process.cwd(), "./src/app/addProblem/courses.json"),
  );
  const courses = JSON.parse(data.toString());

  return (
    <>
      <SeoMeta
        title="add"
        meta_title="add problem"
        description="add problem"
      />
      <UploadProblem courses={courses} />
      {/* <UploadProblemForm/> */}
    </>
  );
};
export default AddProblem;
