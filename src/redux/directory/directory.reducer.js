const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.pexels.com/photos/936038/pexels-photo-936038.jpeg?auto=compress&cs=tinysrgb&w=600',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://media.istockphoto.com/photos/portrait-of-pensive-handsome-man-in-eyeglasses-looking-away-isolated-picture-id900882774?k=20&m=900882774&s=612x612&w=0&h=LxOHs2OcqP1R6F6Ow7iUeuz7JDdkfid89SqRTr4qOi4=',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.pexels.com/photos/4273288/pexels-photo-4273288.jpeg?auto=compress&cs=tinysrgb&w=600',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=600',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=600',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;