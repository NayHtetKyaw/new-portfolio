import { Heading, Container, Flex, Text, Box } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { IconLocationFilled, IconHome } from "@tabler/icons-react";
import Image from "next/image";

export default function NameCard() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container className="flex justify-center h-screen text-gray-400">
      <Flex gap="4" align="center" direction="column">
        <motion.ul variants={container} initial="hidden" animate="visible">
          <motion.li variants={item}>
            <Image
              src="/media/profile.png"
              alt="Nay Htet Kyaw"
              width={200}
              height={200}
              className="rounded-full"
            />
          </motion.li>

          <motion.li variants={item}>
            <Heading as="h1" className="text-6xl sm:text-7xl">
              「Nay Htet Kyaw」
            </Heading>
          </motion.li>

          <motion.li variants={item} className="text-center mt-2">
            <Text as="span" size="5" align="center">
              Senior Software Engineering Student
            </Text>
          </motion.li>

          <Box className="flex flex-row mt-2 justify-center">
            <motion.li variants={item} className="flex flex-row content-center">
              <IconLocationFilled size={18} className="self-center" />
              <Text size="5" align="center" ml={"2"}>
                Bangkok
              </Text>
            </motion.li>

            <motion.li variants={item} className="flex flex-row content-center">
              <IconHome size={18} className="self-center ml-4" />
              <Text as="span" size="5" align="center" className="ml-2">
                Myanmar
              </Text>
            </motion.li>
          </Box>
        </motion.ul>
      </Flex>
 


				{/* review and ratings */}
				<Flex direction="column" justify="flex-start" ml="3" gap="4" w="100%">
					<Rating size="md" value={review.rating} fractions={2} defaultValue={0} readOnly />
					<Text fw={800} size="sm">
						Academic Year: {review.academicYear}
					</Text>
					<Spoiler maxHeight={75} showLabel="Show more" hideLabel="Hide">
						<TypographyStylesProvider mt="md">
							<ReactMarkdown>{review.description}</ReactMarkdown>
						</TypographyStylesProvider>
					</Spoiler>
				</Flex>

				{/* TODO: like and dislike button */}
			</Flex>
		</Card>
	);
}

export function MyReviewCard({ review, onEditReview, onDeleteReview }: ReviewCardProps) {
	const [opened, { open, close }] = useDisclosure(false);
	const [updatedReview, setUpdatedReview] = useState<Review>(review);

	const handleEditReview = () => {
		review = updatedReview ? updatedReview : review;
		open;
	};

	const handleDeleteReview = () => {
		//TODO: implement delete review
		console.log("Delete review");
	};

	return (
		<>
			<Card
				bg="gray.9"
				padding="md"
				radius="md"
				withBorder
				className={`border-${getStatusColor(review.status)}-500`}
			>
				<Flex direction="row" gap="md" justify="center">
					{/* user profile and badges */}
					<Flex
						direction="column"
						align="center"
						gap="4"
						justify="center"
						className="max-w-sm text-center"
						visibleFrom="md"
					>
						<Avatar size="70" src={null} alt="anonymous profile" />
						<Text>You</Text>
						<Badge color={getStatusColor(review.status)}>{review.status}</Badge>
					</Flex>

					{/* review and ratings */}

					<Flex direction="column" justify="flex-start" ml="3" gap="xs" w="100%">
						<Badge color={getStatusColor(review.status)} hiddenFrom="md">
							{review.status}
						</Badge>
						{review.status === "REJECTED" && (
							<Blockquote color="red" w="100%" p="sm" mb="xs">
								<Text>Your review has been rejected Your review has been rejected</Text>
							</Blockquote>
						)}

						<Rating size="md" value={review.rating} fractions={2} defaultValue={0} readOnly />
						<Text fw={800} size="md">
							Academic Year: {review.academicYear}
						</Text>
						<Spoiler maxHeight={75} showLabel="Show more" hideLabel="Hide">
							<TypographyStylesProvider mt="sm">
								<ReactMarkdown>{review.description}</ReactMarkdown>
							</TypographyStylesProvider>
						</Spoiler>
					</Flex>
					<Menu>
						<Menu.Target>
							<IconDots />
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item leftSection={<IconEdit />} onClick={handleEditReview}>
								Edit Review
							</Menu.Item>
							<Menu.Item leftSection={<IconX />} onClick={handleDeleteReview} className="text-red-500">
								Delete Review
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Flex>
			</Card>

			{/* Modal Edit Form */}
			<Modal
				opened={opened}
				onClose={close}
				title="Editing Review"
				centered
				overlayProps={{
					backgroundOpacity: 0.55,
					blur: 3
				}}
			>
				{/* Modal content */}
				<WriteReviewForm
					onSubmitCallBack={(academicYear, description, rating) => {
						setUpdatedReview((prevReview) => ({
							...prevReview,
							academicYear,
							description,
							rating
						}));
						close();
					}}
					initialValues={{
						academicYear: updatedReview.academicYear,
						description: updatedReview.description,
						rating: updatedReview.rating
					}}
				/>
			</Modal>
		</>
	);
}

    </Container>
  );
}
