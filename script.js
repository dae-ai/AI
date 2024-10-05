// // async function generateContent() {
// //         const prompt = document.getElementById('prompt').value;

// //         if (prompt === '') {
// //             alert('Please enter a prompt!');
// //             return;
// //         }

// //         //clear a previous prompt and show a loading message
// //         document.getElementById('result').innerText = 'Generating content..';
        
// //         try {
// //         const response = await fetch('/api/content', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify({ question: prompt })
// //         });

// //         const data = await response.json();
// //         if(data.result) {
// //           document.getElementById('result').innerText= data.result;
// //         }
// //         else {
// //           document.getElementById('result').innerText ='Error generating content!';
// //         }

// //       } catch(err) {
// //         document.getElementById('error').innerText = 'An error occurred while  generating content!' + err.message;
// //       }
// // }   



// // document.getElementById('aiForm').addEventListener('submit', async (event) => {
// //   event.preventDefault();

// //   const prompt = document.getElementById('prompt').value;
  
// //   try {
// //     const response = await fetch('/api/content', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ question: prompt }),
// //     });

// //     const data = await response.json();
// //     document.getElementById('result').textContent = data.Result || 'No content generated.';
// //   } catch (error) {
// //     document.getElementById('result').textContent = `Error: ${error}`;
// //   }
// // });

// document.getElementById('aiForm').addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const prompt = document.getElementById('prompt').value.trim();

//   if (!prompt) {
//     document.getElementById('result').textContent = 'Please enter a prompt.';
//     return;
//   }

//   // Show a loading message while waiting for the response
//   document.getElementById('result').textContent = 'Generating content...';

//   try {
//     const response = await fetch('/api/content', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ question: prompt }),
//     });

//     const data = await response.json();

//     // Strip asterisks (**) from the output using regex
//     const cleanedResult = (data.Result || 'No content generated.').replace(/\*\*/g, '');

//     // Display the cleaned content in the result box
//     document.getElementById('result').textContent = cleanedResult;
//   } catch (error) {
//     document.getElementById('result').textContent = `Error: ${error.message}`;
//   } finally {
//     // Clear the input field after processing the request
//     document.getElementById('prompt').value = '';
//   }
// });
