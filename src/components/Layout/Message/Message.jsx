import { useEffect, useState } from 'react';
import './Message.css';

function Message({ msg, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  }, [msg]);

  return <span>{visible && <p className={`message ${[type]}`}>{msg}</p>}</span>;
}

export default Message;
