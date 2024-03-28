'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const article = document.querySelector('.article');
	const article_wrap = article.querySelector('.article__wrap');
	const title = article.querySelector('h2');
	const text = article.querySelector('p');
	const editBtn = article.querySelector('.edit-btn');

	editBtn.addEventListener('click', function() {
		article_wrap.classList.toggle('d-none')
		const titleValue = title.textContent;
		const textValue = text.textContent;
		const editForm = document.createElement('div');
		editForm.classList.add('edit-form');
		
		const titleInput = document.createElement('input');
		titleInput.value = titleValue;
		
		const textArea = document.createElement('textarea');
		textArea.textContent = textValue;
		
		
		const saveBtn = document.createElement('button');
		saveBtn.textContent = 'Save';
		
		const cancelBtn = document.createElement('button');
		cancelBtn.textContent = 'Cancel';
		
		saveBtn.addEventListener('click', function() {
			title.textContent = titleInput.value;
			text.textContent = textArea.value;
			editForm.remove();
			article.querySelector('.article__wrap').classList.toggle('d-none')
			const articleData = {
				'articleTitle':title.textContent,
				'articleText': text.textContent
			}
			fetch('http://localhost:3000/article', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(articleData)
			})
			.then(response => response.text())
			.then(data => {
				console.log(data); 
			})
			.catch(error => {
				console.error('Error:', error);
			});
		});
		
		cancelBtn.addEventListener('click', function() {
			editForm.remove();
			article.querySelector('.article__wrap').classList.toggle('d-none')
		});
		
		editForm.appendChild(titleInput);
		editForm.appendChild(textArea);
		editForm.appendChild(saveBtn);
		editForm.appendChild(cancelBtn);
		
		article.appendChild(editForm);
	});
  
});