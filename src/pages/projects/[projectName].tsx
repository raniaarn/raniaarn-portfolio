import { useRouter } from "next/router";
import {
  Memoar,
  SalingTukar,
  SkillBoozt,
  Bansource,
  Guidu,
  Maams,
  Events,
  Berjasa,
  Seville
} from "@/components/modules/ProjectModule";

const ProjectPage = () => {
  const router = useRouter()
  const { projectName } = router.query

  return (
    <div>
      {projectName === 'Memoar' && <Memoar />}
      {projectName === 'SalingTukar' && <SalingTukar />}
      {projectName === 'Bansource' && <Bansource />}
      {projectName === 'SkillBoozt' && <SkillBoozt />}
      {projectName === 'Guidu' && <Guidu />}
      {projectName === 'Maams' && <Maams />}
      {projectName === 'Events' && <Events />}
      {projectName === 'Berjasa' && <Berjasa />}
      {projectName === 'Seville' && <Seville />}
    </div>
  )
}

export default ProjectPage;