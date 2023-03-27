import React from 'react';
import { FlexBlockWidget, ItemSelfAlignWidget } from 'src/docs';

export default function Features() {
  return (
    <div className="bg-gray-800">
      <div className="c-container z-0 space-y-40 py-20 pt-60">
        <div className="z-0 flex gap-16">
          <div className="flex flex-1 flex-col justify-center space-y-6">
            <h3 className="c-heading-text text-4xl font-bold">
              Learn difficult concepts by playing around
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              accusamus voluptate illum dolorum maiores itaque. Natus,
              consectetur expedita eos ipsum cupiditate voluptatem neque quos
              fugit veniam, eum ea, officiis recusandae!
            </p>
            <div>
              <button className="rounded-full bg-blue-500 px-6 py-2">
                Try it!
              </button>
            </div>
          </div>
          <div className="relative h-80 flex-1">
            <FlexBlockWidget />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-16">
          <div className="flex flex-1 flex-col justify-center space-y-6">
            <h3 className="c-heading-text text-4xl font-bold">
              Build your confidence in Flexbox
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              accusamus voluptate illum dolorum maiores itaque. Natus,
              consectetur expedita eos ipsum cupiditate voluptatem neque quos
              fugit veniam, eum ea, officiis recusandae!
            </p>
            <div>
              <button className="rounded-full bg-blue-500 px-6 py-2">
                Try it!
              </button>
            </div>
          </div>
          <div className="h-80 flex-1">
            <ItemSelfAlignWidget />
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-1 flex-col justify-center space-y-6">
            <h3 className="c-heading-text text-4xl font-bold">
              Learn concepts by visualizing
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              accusamus voluptate illum dolorum maiores itaque. Natus,
              consectetur expedita eos ipsum cupiditate voluptatem neque quos
              fugit veniam, eum ea, officiis recusandae!
            </p>
            <div>
              <button className="rounded-full bg-blue-500 px-6 py-2">
                Try it!
              </button>
            </div>
          </div>
          <div className="h-80 flex-1">
            <FlexBlockWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
