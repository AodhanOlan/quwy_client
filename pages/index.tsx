import * as React from 'react';
import MainLayout from "../layouts/MainLayout";

const Index: React.FC = () => {
  const arr = new Array(10).fill(1).map((e, i) => i);
  return (
      <MainLayout>
        <div className="box">
          {
            arr.map((el) => (
              <div key={el} className="box__item">Box</div>
            ))
          }
        </div>

      </MainLayout>
  );
};
export default Index
