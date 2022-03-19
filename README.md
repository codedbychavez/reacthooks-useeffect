# reacthooks-useeffect
Simple project demonstrating the useEffect hook

## What it looks like in the browser
![image](https://user-images.githubusercontent.com/74829200/159138760-183d745e-6f87-4b26-a405-3e6c38695030.png)

## Explanation
The useEffect hook in React allows us to do another action as a result of changing a state.
Looking at the image above, there are three buttons:
- Users
- Posts
- Comments

In our case we needed to update the content to show either: users, posts or comments depending on what button was clicked.

The app uses the following states (You can find these in App.js):
1. `const [content, setContent] = useState('users');`.  
2. `const [data, setData] = useState([]);`. 

On each button, we attached a function called `handleContentChange` on the `onClick` event listener. This function handles updating the `content` (users, posts, comments).

As a result of the `content` change, we setup the `useState` hook to listen for changes/ updates to `content`, then we fetch from our API the respective data which is as a prop to the `Content` component in `src/components/Content.js` that handles displaying the data.

