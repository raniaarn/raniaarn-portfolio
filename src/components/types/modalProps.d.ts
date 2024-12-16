import { ProjectCardData } from "./projectCardProps";

interface ModalProps extends ProjectCardData {
  handleClose: () => void;
}
