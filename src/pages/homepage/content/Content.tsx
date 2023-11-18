import type { ReactElement } from "react";
import type { ContentProps } from "./type";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import LabelText from "~/components/label-text";

import { ContentMainWrapper, ContentWrapper, ContentHeader, StyledImage } from "~/utils/styledComponents";

const Content = (props: ContentProps): ReactElement => {
  const { data } = props;

  return (
    <ContentMainWrapper direction={"column"}>
      <ContentWrapper>
        <ContentHeader>
          <StyledImage
            src={data?.pic}
            alt=""
          />
          <Typography
            variant="h4"
            color={"#ff8fab"}
          >
            {data?.name}
          </Typography>
        </ContentHeader>

        <Stack>
          <LabelText
            label="Email"
            text={data?.email}
          />
          <LabelText
            label="Phone"
            text={data?.phone}
          />
          <LabelText
            label="Gender"
            text={`${data?.gender.charAt(0).toUpperCase()}${data?.gender.slice(1)}`}
          />
        </Stack>
        <Stack>
          <Typography
            variant="subtitle1"
            color={"#ff8fab"}
          >
            Description:
          </Typography>
          <Typography
            variant="body2"
            color={"primary.main"}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          </Typography>
        </Stack>
      </ContentWrapper>
    </ContentMainWrapper>
  );
};

export default Content;
