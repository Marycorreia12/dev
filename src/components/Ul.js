function Ul({ profession, awards, discovery }) {
  return (
    <ul>
      <li>
        <b>Profession:</b> {profession}
      </li>
      <li>
        <b>Awards: {awards.length} </b>({awards.join(", ")})
      </li>
      <li>
        <b>Discovered: </b>
        {discovery}
      </li>
    </ul>
  );
}

export default Ul;
