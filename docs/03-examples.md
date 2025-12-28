# GitHub Copilot Examples

## Python Examples

### Auto-completion
Copilot can complete entire functions:

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left = [x for x in arr[1:] if x <= pivot]
    right = [x for x in arr[1:] if x > pivot]
    return quicksort(left) + [pivot] + quicksort(right)
```

### Web Scraping
```python
import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    return soup.find_all('a')
```

## JavaScript Examples

### React Component
```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };
  
  return (
    <div>
      <input onKeyPress={(e) => e.key === 'Enter' && addTodo(e.target.value)} />
      <ul>{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
    </div>
  );
}
```

## Tips for Better Completions

1. **Write clear comments** - Describe what you want to do
2. **Use type hints** - Copilot understands types better
3. **Keep context visible** - Leave imports and class definitions visible
4. **Name variables clearly** - Descriptive names help Copilot understand intent
