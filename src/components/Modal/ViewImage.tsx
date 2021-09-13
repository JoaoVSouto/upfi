import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent maxW="fit-content" bgColor="transparent">
        <ModalBody p={0}>
          <Image src={imgUrl} alt="image" maxW={900} maxH={600} />
        </ModalBody>

        <ModalFooter
          bgColor="#353431"
          borderBottomRadius={6}
          py={2}
          px={2.5}
          justifyContent="flex-start"
        >
          <Link
            fontSize={14}
            href={imgUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
