import { TextInput } from 'flowbite-react';
import React from 'react';
import { IFlexItemsInitialState } from './flexbox.types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  //   centerMode: true,
  //   className: 'center',
  //   infinite: true,
  arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

interface IItemsProps {
  itemsState: IFlexItemsInitialState;
}

export default function Items({ itemsState }: IItemsProps) {
  return (
    <div className="c-border col-span-12 gap-5 rounded-lg p-5 dark:bg-gray-900">
      <Slider {...settings}>
        {itemsState?.items.map((i) => (
          <div
            key={i?.id}
            className="c-border w-80 overflow-hidden rounded-lg dark:bg-gray-800"
          >
            <h2 className="c-title p-4 text-xl dark:bg-gray-900">{i?.id}</h2>
            <div className="flex items-center p-4">
              <label htmlFor={`order-${i?.id}`} className="c-title flex-1">
                Order
              </label>
              <TextInput
                value={i.order}
                sizing="sm"
                id={`order-${i?.id}`}
                type="number"
                className="flex-1"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
