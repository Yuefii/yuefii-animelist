interface HeaderMenuProps {
  title: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ title }) => {
  return (
    <>
      <div className="p-3 border-b border-black">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </>
  );
};

export default HeaderMenu;
