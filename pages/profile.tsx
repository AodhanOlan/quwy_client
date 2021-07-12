import * as React from 'react';
import MainLayout from "../layouts/MainLayout";
import ProfileLogin from '../components/ProfileLogin';

const Profile: React.FC = () => {
  return (
      <MainLayout>
        <div className="profile">
          <ProfileLogin />
        </div>
      </MainLayout>
  );
};
export default Profile