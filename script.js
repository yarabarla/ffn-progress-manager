function removeSelectionBlock() {
	const storyText = document.getElementById('storytextp')
	storyText.style.userSelect = 'text'
}

function isLoggedIn() { // Janky af lmao
  const loginContainer = document.getElementById('name_login')
  const aTags = loginContainer.getElementsByTagName('a')

  return aTags.length == 1 // Logout button is <span> not <a>
}

removeSelectionBlock()
isLoggedIn()
