namespace Igdev_dep_board;

public partial class AppShell : Shell
{
	public AppShell()
	{
		InitializeComponent();
	}

	private async void GotoHome(object sender, EventArgs e)
	{
		await Navigation.PopToRootAsync();
	}
}
