import type { ReactElement } from "react";
import type { StoredData } from "~/models/commons";

import { useState, useEffect } from "react";

import Header from "~/pages/homepage/header";
import Content from "~/pages/homepage/content";

import { MainWrapper } from "~/utils/styledComponents";
import { getEmail } from "~/api/email";

const Homepage = (): ReactElement => {
  const [profile, setProfile] = useState<StoredData>();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profile") as string);
    setProfile(data);
  }, []);

  const handleSaveToStorage = (data: StoredData): void => {
    localStorage.setItem("profile", JSON.stringify(data));
    setProfile(data);
  };

  const handleGenerateProfile = (): void => {
    getEmail().then((response) => {
      const { results } = response;
      const {
        name: { first, last, title },
        email,
        phone,
        picture: { large },
        gender,
      } = results[0];

      const payload = {
        name: `${title} ${first} ${last}`,
        email,
        gender,
        pic: large,
        phone,
      };

      handleSaveToStorage(payload);
    });
  };

  return (
    <MainWrapper
      container
      direction={"row"}
      gap={3}
    >
      <Header generateProfile={handleGenerateProfile} />
      {profile && <Content data={profile} />}
    </MainWrapper>
  );
};

export default Homepage;
