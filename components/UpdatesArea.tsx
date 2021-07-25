import { Stack, Center } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function UpdatesArea(props) {
  return (
    <Stack direction={["column", "column", "row", "row", "row"]} spacing="6">
      <Stack direction="column" spacing="6">
        {props.posts.slice1.map((entry, index) => {
          return (
            <Center key={entry.slug}>
              <BlogCard
                to={"/blog/post/" + entry.slug}
                cover={entry.image}
                title={entry.title}
                description={entry.description}
                date={entry.date}
                copyright={entry.imageCopyright}
                tag={entry.tag}
              />
            </Center>
          );
        })}
      </Stack>

      <Stack direction="column" spacing="6">
        {props.posts.slice2.map((entry, index) => {
          return (
            <Center key={entry.slug}>
              <BlogCard
                to={"/blog/post/" + entry.slug}
                cover={entry.image}
                title={entry.title}
                description={entry.description}
                date={entry.date}
                copyright={entry.imageCopyright}
                tag={entry.tag}
              />
            </Center>
          );
        })}
      </Stack>

      <Stack direction="column" spacing="6">
        {props.posts.slice3.map((entry, index) => {
          return (
            <Center key={entry.slug}>
              <BlogCard
                to={"/blog/post/" + entry.slug}
                cover={entry.image}
                title={entry.title}
                description={entry.description}
                date={entry.date}
                copyright={entry.imageCopyright}
                tag={entry.tag}
              />
            </Center>
          );
        })}
      </Stack>
    </Stack>
  );
}
