export default function Log({ logInfo }) {
  return (
    <ol id="log">
      {logInfo.map((log) => {
        return (
          <li>
            {log.square.row}, {log.square.col}, {log.player}
          </li>
        );
      })}
    </ol>
  );
}
